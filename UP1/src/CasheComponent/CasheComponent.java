package CasheComponent;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.TreeSet;

import MyComparator.MyComparatorCode;

public class CasheComponent {
  
	private static CasheComponent cComponent;
	private TreeSet<String> alAlone;
	private ArrayList<String> alALL;
	private CasheComponent()
	{
		alAlone = new TreeSet<>();
		alALL = new ArrayList<>();
		
	}
	public static CasheComponent getInstance()
	{
		if(cComponent == null)
		{
			cComponent =  new CasheComponent();
			return cComponent;
		}
		return cComponent;
	}
	public void addComponent(String name)
	{
		alAlone.add(name);
	}
	public void addAllComponent(String name)
	{
		alALL.add(name);
	}
	public void writeFileAlone(File file) throws IOException
	{
		BufferedWriter bw = new BufferedWriter(new FileWriter(file));
		for(String str : alAlone)
		{
			bw.write(str);
			bw.newLine();
		}
		bw.close();
	}
	public void writeAllFile(File file) throws IOException
	{
        alALL.sort(new MyComparatorCode());
		BufferedWriter bw = new BufferedWriter(new FileWriter(file));
		for(String str : alALL)
		{
			bw.write(str);
			bw.newLine();
		}
		bw.close();	
	}
}
